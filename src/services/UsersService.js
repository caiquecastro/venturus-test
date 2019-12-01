function fetchJson(endpoint) {
  return fetch(endpoint).then((res) => res.json());
}

export default {
  fetchAll({ filter } = {}) {
    return Promise.all([
      fetchJson('https://jsonplaceholder.typicode.com/users'),
      fetchJson('https://jsonplaceholder.typicode.com/posts'),
      fetchJson('https://jsonplaceholder.typicode.com/albums'),
      fetchJson('https://jsonplaceholder.typicode.com/photos'),
      fetchJson('http://localhost:3001/rides'),
    ]).then(([users, posts, albums, photos, rides]) => {
      const filteredUsers = users.filter((u) => {
        if (filter) {
          return u.name.includes(filter)
            || u.username.includes(filter)
            || u.email.includes(filter)
            || u.address.city.includes(filter);
        }

        return true;
      });

      return filteredUsers.map((user) => {
        const postsCount = posts.filter((r) => r.userId === user.id).length;
        const userAlbums = albums.filter((r) => r.userId === user.id);
        const albumsCount = userAlbums.length;
        const albumIds = userAlbums.map((a) => a.id);
        const photosCount = photos.filter((r) => albumIds.includes(r.albumId)).length;
        const userRides = rides.find((r) => r.userId === user.id);
        const rideInGroup = userRides ? userRides.frequency : null;
        const rideDays = (userRides ? userRides.days : []).join(', ');

        return {
          ...user,
          postsCount,
          albumsCount,
          photosCount,
          rideInGroup,
          rideDays,
        };
      });
    });
  },

  create(attributes) {
    return fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(attributes),
    }).then((res) => res.json())
      .then((responseBody) => {
        const { city, ...rest } = attributes;
        return {
          address: {
            city,
          },
          ...rest,
          ...responseBody,
        };
      });
  },

  deleteUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE',
    });
  },
};
