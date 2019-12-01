function fetchJson(endpoint) {
    return fetch(endpoint).then(res => res.json());
}

export default {
    fetchAll() {
        return Promise.all([
            fetchJson("https://jsonplaceholder.typicode.com/users"),
            fetchJson("https://jsonplaceholder.typicode.com/posts"),
            fetchJson("https://jsonplaceholder.typicode.com/albums"),
            fetchJson("https://jsonplaceholder.typicode.com/photos"),
        ]).then(([users, posts, albums, photos]) => {
            return users.map((user) => {
                const postsCount = posts.filter(r => r.userId === user.id).length;
                const userAlbums = albums.filter(r => r.userId === user.id);
                const albumsCount = userAlbums.length;
                const albumIds = userAlbums.map(a => a.id);
                const photosCount = photos.filter(r => albumIds.includes(r.albumId)).length;

                return {
                    ...user,
                    postsCount,
                    albumsCount,
                    photosCount,
                };
            });

            return users;
        })
    }
}