import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          动态: {
            screens: {
              post: 'posts',
            },
          },
          我的: {
            screens: {
              me: 'me',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
