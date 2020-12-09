export interface Feature {
    name: string;
    description: string;
    picture: string;
}

export const GENERALS_FEATURE: Feature[] = [
    {
        name: 'Créer ou continuer un dessin',
        description:
            "Le bouton «Nouveau Dessin» permet d'effacer le dessin sur la surface de dessin et d'en créer un nouveau. S'il y a un dessin sur la surface de dessin, une fenêtre va apparaître pour s'assurer que vous voulez vraiment effacer le dessin présent sur la surface. ",
        picture: './../../../assets/img/nouveau-dessin.png',
    },
    {
        name: 'Carrousel de dessin',
        description:
            "Le carrousel de dessin permet d'ouvrir un dessin déjà créé et sauvegardé sur le serveur. Les dessins sauvegardés sont sous la forme d'un carrousel. Il est possible de voir trois dessins en même temps. Il est possible d'entrer des étiquettes pour pouvoir filtrer les dessins. Il est possible de charger le dessin en cliquant dessus.",
        picture: './../../../assets/img/carroussel.png',
    },
    {
        name: 'Sauvegarde',
        description:
            "Cette fonctionnalité permet de sauvegarder le dessin sur le serveur en format PNG. Pour sauvegarder le dessin, il faut entrer un nom. Il est possible d'ajouter des étiquettes (max 5 étiquettes).",
        picture: './../../../assets/img/sauvegarde.png',
    },
    {
        name: 'Exportation',
        description:
            "Cette fonctionnalité permet d'exporter le dessin localement ou par courriel en format PNG ou JPG. Elle permet aussi d'appliquer un filtre sur l'image avant de l'exporter. Il faut nommer l'image pour pouvoir l'exporter ",
        picture: './../../../assets/img/exporter.png',
    },
    {
        name: 'Sauvegarde automatique',
        description:
            "Cette fonctionnalité permet de sauvegarder le dessin automatiquement pendant son édition. La sauvegarde est déclenchée après la création d'un dessin, le chargement d'un dessin ou lors d'une modification sur la surface de dessin. Il est possible de récupérer le dessin avec le button Continuer un dessin",
        picture: './../../../assets/img/continuer.png',
    },
];
