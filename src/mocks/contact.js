import wepy from 'wepy';

let users = [
    {id: 'mayun', name: '马云'},
];


users = users.sort((a, b) => a.id.charCodeAt(0) - b.id.charCodeAt(0));

let table = users.map((v) => {
    return {
        name: v.name,
        id: v.id,
        icon: wepy.env === 'web' ? `./mocks/users/${v.id}.png` : `../mocks/users/${v.id}.png`
    };
});
export default table
