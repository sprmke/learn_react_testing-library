const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Michael',
          last: 'Manlulu',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'sprmke',
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
