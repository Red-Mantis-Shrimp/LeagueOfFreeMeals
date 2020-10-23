interface UserProfile {
    playerName: string;
    summonerId: number;
    profileImageSrc: string;
}

export const USERS: UserProfile[] = [
    {
        playerName: 'Sec',
        summonerId: 31390656,
        profileImageSrc: '../src/static/images/profile/anderson.jpg',
    },
    {
        playerName: 'KnightHulk',
        summonerId: 34769851,
        profileImageSrc: '../src/static/images/profile/andrew.jpg',
    },
    {
        playerName: 'Asmir9990',
        summonerId: 28676086,
        profileImageSrc: '../src/static/images/profile/asmir.jpg',
    },
    {
        playerName: 'Crendez',
        summonerId: 23815851,
        profileImageSrc: '../src/static/images/profile/crendall.jpg',
    },
    {
        playerName: 'Bluegoldfish',
        summonerId: 21183068,
        profileImageSrc: '../src/static/images/profile/filip.jpg',
    },
];
