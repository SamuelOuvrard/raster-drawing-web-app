import { expect } from 'chai';
import * as fs from 'fs';
import { Db, MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as sinon from 'sinon';
import { DBData } from '../../../common/communication/drawing-data';
import { testingContainer } from '../../test/test-utils';
import { TYPES } from '../types';
import { DatabaseService } from './database.service';

describe('Database service', () => {
    let databaseService: DatabaseService;
    let mongoServer: MongoMemoryServer;
    let db: Db;
    let client: MongoClient;
    let testDBData: DBData;
    let directoryStub: sinon.SinonStub;
    const fileNameTest = 'fileNameRandom';

    beforeEach(async () => {
        const [container] = await testingContainer();
        databaseService = container.get<DatabaseService>(TYPES.DatabaseService);
        directoryStub = sinon.stub(fs, 'unlinkSync').returns();
        databaseService.DIR = './testing-images';
        databaseService.IMAGE_PATH = '../../testing-images/';
        mongoServer = new MongoMemoryServer();
        const mongoUri = await mongoServer.getUri();
        client = await MongoClient.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        db = client.db(await mongoServer.getDbName());
        databaseService.collection = db.collection('test');

        testDBData = { id: '5', name: 'randomName', tags: ['tag1', 'tag2'], fileName: fileNameTest };
        databaseService.collection.insertOne(testDBData);
    });

    afterEach(async () => {
        client.close();
        directoryStub.restore();
    });

    it('should get all DBData from DB', async () => {
        try {
            const dbData = await databaseService.getDBData();
            expect(dbData.length).to.equal(1);
            expect(testDBData).to.deep.equals(dbData[0]);
        } catch {}
    });

    it('should delete drawing', async () => {
        await databaseService.deleteDrawing(fileNameTest);
        const dbData = await databaseService.collection.find({}).toArray();
        expect(directoryStub.called);
        expect(dbData.length).to.equal(0);
    });

    it('should not delete a drawing if it has an invalid filename ', async () => {
        try {
            await databaseService.deleteDrawing('invalidFileName');
        } catch {
            const dbData = await databaseService.collection.find({}).toArray();
            expect(dbData.length).to.equal(1);
        }
    });

    it('should insert a new drawing', async () => {
        const DBDATA: DBData = { id: 'test', name: 'meta', tags: ['tag'], fileName: fileNameTest };
        await databaseService.addDrawing(DBDATA);
        const dbData = await databaseService.collection.find({}).toArray();
        expect(dbData.length).to.equal(2);
        expect(dbData.find((x) => x.name === DBDATA.name)).to.deep.equals(DBDATA);
    });

    it('should not insert a new drawing if name is empty', async () => {
        const DBDATA: DBData = { id: 'test', name: '', tags: ['tag'], fileName: fileNameTest };
        try {
            await databaseService.addDrawing(DBDATA);
        } catch {
            const dbData = await databaseService.collection.find({}).toArray();
            expect(directoryStub.called);
            expect(dbData.length).to.equal(1);
        }
    });

    it('should not insert a new drawing if name is too long', async () => {
        const DBDATA: DBData = { id: 'test', name: 'namethatismorethanfifteencharacterslong', tags: ['tag'], fileName: fileNameTest };
        try {
            await databaseService.addDrawing(DBDATA);
        } catch {
            const dbData = await databaseService.collection.find({}).toArray();
            expect(directoryStub.called);
            expect(dbData.length).to.equal(1);
        }
    });

    it('should not insert a new drawing if there is more than 5 tags ', async () => {
        const DBDATA: DBData = { id: 'test', name: 'meta', tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'], fileName: fileNameTest };
        try {
            await databaseService.addDrawing(DBDATA);
        } catch {
            const dbData = await databaseService.collection.find({}).toArray();
            expect(directoryStub.called);
            expect(dbData.length).to.equal(1);
        }
    });

    it('should not insert a new drawing if there is at least one tag that is too long', async () => {
        const DBDATA: DBData = { id: 'test', name: 'meta', tags: ['tag1', 'tagthatismorethanfifteencharacterslong'], fileName: fileNameTest };
        try {
            await databaseService.addDrawing(DBDATA);
        } catch {
            const dbData = await databaseService.collection.find({}).toArray();
            expect(directoryStub.called);
            expect(dbData.length).to.equal(1);
        }
    });

    it('should not insert a new drawing if there is one tag and that it is too long', async () => {
        const DBDATA: DBData = { id: 'test', name: 'meta', tags: ['tagthatismorethanfifteencharacterslong'], fileName: fileNameTest };
        try {
            await databaseService.addDrawing(DBDATA);
        } catch {
            const dbData = await databaseService.collection.find({}).toArray();
            expect(directoryStub.called);
            expect(dbData.length).to.equal(1);
        }
    });

    it('should return image path', async () => {
        const DBDATA: DBData = { id: 'test', name: 'meta', tags: ['tag'], fileName: fileNameTest };
        databaseService.IMAGE_PATH = '../../testing-images/';
        await databaseService.addDrawing(DBDATA);
        const path = databaseService.getImagePath();
        expect(path).to.equal('../../testing-images/');
    });

    it('should return directory path', async () => {
        const DBDATA: DBData = { id: 'test', name: 'meta', tags: ['tag'], fileName: fileNameTest };
        databaseService.IMAGE_PATH = '../../testing-images/';
        await databaseService.addDrawing(DBDATA);
        const path = await databaseService.getDirPath();
        expect(path).to.equal('./testing-images');
    });

    it('should return multer', async () => {
        const DBDATA: DBData = { id: 'test', name: 'meta', tags: ['tag'], fileName: 'test' };
        await databaseService.addDrawing(DBDATA);
        databaseService.createMulterUpload('randomDirectory');
        expect(databaseService.multerObject).not.to.equal(undefined);
    });
});
