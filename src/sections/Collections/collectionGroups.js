import categoryItems from '@/sections/Categories/categoryitems'

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/action-5.png',
              '/src/assets/images/categories/action/action-6.png',
              '/src/assets/images/categories/action/action-7.png',
              '/src/assets/images/categories/action/action-8.png',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/adventure-5.png',
              '/src/assets/images/categories/adventure/adventure-6.png',
              '/src/assets/images/categories/adventure/adventure-7.png',
              '/src/assets/images/categories/adventure/adventure-8.png',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/comedy-5.png',
              '/src/assets/images/categories/comedy/comedy-6.png',
              '/src/assets/images/categories/comedy/comedy-7.png',
              '/src/assets/images/categories/comedy/comedy-8.png',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/drama-5.png',
              '/src/assets/images/categories/drama/drama-6.png',
              '/src/assets/images/categories/drama/drama-7.png',
              '/src/assets/images/categories/drama/drama-8.png',
            ],
          },

          {
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/action-5.png',
              '/src/assets/images/categories/action/action-6.png',
              '/src/assets/images/categories/action/action-7.png',
              '/src/assets/images/categories/action/action-8.png',
            ],
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/adventure-5.png',
              '/src/assets/images/categories/adventure/adventure-6.png',
              '/src/assets/images/categories/adventure/adventure-7.png',
              '/src/assets/images/categories/adventure/adventure-8.png',
            ],
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/comedy-5.png',
              '/src/assets/images/categories/comedy/comedy-6.png',
              '/src/assets/images/categories/comedy/comedy-7.png',
              '/src/assets/images/categories/comedy/comedy-8.png',
            ],
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/drama-5.png',
              '/src/assets/images/categories/drama/drama-6.png',
              '/src/assets/images/categories/drama/drama-7.png',
              '/src/assets/images/categories/drama/drama-8.png',
            ],
          },

          {
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/action-5.png',
              '/src/assets/images/categories/action/action-6.png',
              '/src/assets/images/categories/action/action-7.png',
              '/src/assets/images/categories/action/action-8.png',
            ],
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/adventure-5.png',
              '/src/assets/images/categories/adventure/adventure-6.png',
              '/src/assets/images/categories/adventure/adventure-7.png',
              '/src/assets/images/categories/adventure/adventure-8.png',
            ],
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/comedy-5.png',
              '/src/assets/images/categories/comedy/comedy-6.png',
              '/src/assets/images/categories/comedy/comedy-7.png',
              '/src/assets/images/categories/comedy/comedy-8.png',
            ],
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/drama-5.png',
              '/src/assets/images/categories/drama/drama-6.png',
              '/src/assets/images/categories/drama/drama-7.png',
              '/src/assets/images/categories/drama/drama-8.png',
            ],
          },

          {
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/action-5.png',
              '/src/assets/images/categories/action/action-6.png',
              '/src/assets/images/categories/action/action-7.png',
              '/src/assets/images/categories/action/action-8.png',
            ],
          },
          {
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/adventure-5.png',
              '/src/assets/images/categories/adventure/adventure-6.png',
              '/src/assets/images/categories/adventure/adventure-7.png',
              '/src/assets/images/categories/adventure/adventure-8.png',
            ],
          },
          {
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/comedy-5.png',
              '/src/assets/images/categories/comedy/comedy-6.png',
              '/src/assets/images/categories/comedy/comedy-7.png',
              '/src/assets/images/categories/comedy/comedy-8.png',
            ],
          },
          {
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/drama-5.png',
              '/src/assets/images/categories/drama/drama-6.png',
              '/src/assets/images/categories/drama/drama-7.png',
              '/src/assets/images/categories/drama/drama-8.png',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.57,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/movie-3.png',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/movie-4.png',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/movie-5.png',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/movie-3.png',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/movie-4.png',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/movie-5.png',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/movie-3.png',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/movie-4.png',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/movie-5.png',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/movie-3.png',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/movie-4.png',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/movie-5.png',
            duration: '1h 42min',
            views: '5K',
          },
        ],
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-6.png',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Hidden Strike',
            imgSrc: '/src/assets/images/movies/movie-7.png',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies/movie-8.png',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/movie-9.png',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/movie-10.png',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-6.png',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Hidden Strike',
            imgSrc: '/src/assets/images/movies/movie-7.png',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies/movie-8.png',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/movie-9.png',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/movie-10.png',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-6.png',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Hidden Strike',
            imgSrc: '/src/assets/images/movies/movie-7.png',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies/movie-8.png',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/movie-9.png',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/movie-10.png',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-6.png',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'Hidden Strike',
            imgSrc: '/src/assets/images/movies/movie-7.png',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies/movie-8.png',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/movie-9.png',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/movie-10.png',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
        ],
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/movie-11.png',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/movie-12.png',
            duration: '1h 30min',
            rating: {
              value: 5,
              label: '20K',
            },
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/movie-13.png',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-14.png',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/movie-11.png',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/movie-12.png',
            duration: '1h 30min',
            rating: {
              value: 5,
              label: '20K',
            },
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/movie-13.png',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-14.png',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/movie-11.png',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/movie-12.png',
            duration: '1h 30min',
            rating: {
              value: 5,
              label: '20K',
            },
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/movie-13.png',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-14.png',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/movie-11.png',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/movie-12.png',
            duration: '1h 30min',
            rating: {
              value: 5,
              label: '20K',
            },
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/movie-13.png',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-14.png',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.57,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
  {
    title: 'Shows',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/action-5.png',
              '/src/assets/images/categories/action/action-6.png',
              '/src/assets/images/categories/action/action-7.png',
              '/src/assets/images/categories/action/action-8.png',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/adventure-5.png',
              '/src/assets/images/categories/adventure/adventure-6.png',
              '/src/assets/images/categories/adventure/adventure-7.png',
              '/src/assets/images/categories/adventure/adventure-8.png',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/comedy-5.png',
              '/src/assets/images/categories/comedy/comedy-6.png',
              '/src/assets/images/categories/comedy/comedy-7.png',
              '/src/assets/images/categories/comedy/comedy-8.png',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/drama-5.png',
              '/src/assets/images/categories/drama/drama-6.png',
              '/src/assets/images/categories/drama/drama-7.png',
              '/src/assets/images/categories/drama/drama-8.png',
            ],
          },

          {
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/action-5.png',
              '/src/assets/images/categories/action/action-6.png',
              '/src/assets/images/categories/action/action-7.png',
              '/src/assets/images/categories/action/action-8.png',
            ],
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/adventure-5.png',
              '/src/assets/images/categories/adventure/adventure-6.png',
              '/src/assets/images/categories/adventure/adventure-7.png',
              '/src/assets/images/categories/adventure/adventure-8.png',
            ],
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/comedy-5.png',
              '/src/assets/images/categories/comedy/comedy-6.png',
              '/src/assets/images/categories/comedy/comedy-7.png',
              '/src/assets/images/categories/comedy/comedy-8.png',
            ],
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/drama-5.png',
              '/src/assets/images/categories/drama/drama-6.png',
              '/src/assets/images/categories/drama/drama-7.png',
              '/src/assets/images/categories/drama/drama-8.png',
            ],
          },

          {
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/action-5.png',
              '/src/assets/images/categories/action/action-6.png',
              '/src/assets/images/categories/action/action-7.png',
              '/src/assets/images/categories/action/action-8.png',
            ],
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/adventure-5.png',
              '/src/assets/images/categories/adventure/adventure-6.png',
              '/src/assets/images/categories/adventure/adventure-7.png',
              '/src/assets/images/categories/adventure/adventure-8.png',
            ],
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/comedy-5.png',
              '/src/assets/images/categories/comedy/comedy-6.png',
              '/src/assets/images/categories/comedy/comedy-7.png',
              '/src/assets/images/categories/comedy/comedy-8.png',
            ],
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/drama-5.png',
              '/src/assets/images/categories/drama/drama-6.png',
              '/src/assets/images/categories/drama/drama-7.png',
              '/src/assets/images/categories/drama/drama-8.png',
            ],
          },

          {
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/action-5.png',
              '/src/assets/images/categories/action/action-6.png',
              '/src/assets/images/categories/action/action-7.png',
              '/src/assets/images/categories/action/action-8.png',
            ],
          },
          {
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/adventure-5.png',
              '/src/assets/images/categories/adventure/adventure-6.png',
              '/src/assets/images/categories/adventure/adventure-7.png',
              '/src/assets/images/categories/adventure/adventure-8.png',
            ],
          },
          {
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/comedy-5.png',
              '/src/assets/images/categories/comedy/comedy-6.png',
              '/src/assets/images/categories/comedy/comedy-7.png',
              '/src/assets/images/categories/comedy/comedy-8.png',
            ],
          },
          {
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/drama-5.png',
              '/src/assets/images/categories/drama/drama-6.png',
              '/src/assets/images/categories/drama/drama-7.png',
              '/src/assets/images/categories/drama/drama-8.png',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.57,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: 'Trending Shows Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-1.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.57,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: 'New Released Shows',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/movie-2.png',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.57,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: 'Must - Watch Shows',
        movieItems: [
          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/movie-11.png',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/movie-12.png',
            duration: '1h 30min',
            rating: {
              value: 5,
              label: '20K',
            },
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/movie-13.png',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-14.png',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/movie-11.png',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/movie-12.png',
            duration: '1h 30min',
            rating: {
              value: 5,
              label: '20K',
            },
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/movie-13.png',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-14.png',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/movie-11.png',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/movie-12.png',
            duration: '1h 30min',
            rating: {
              value: 5,
              label: '20K',
            },
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/movie-13.png',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-14.png',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/movie-11.png',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Pushpa 2',
            imgSrc: '/src/assets/images/movies/movie-12.png',
            duration: '1h 30min',
            rating: {
              value: 5,
              label: '20K',
            },
          },
          {
            title: 'Blade Runner 2049',
            imgSrc: '/src/assets/images/movies/movie-13.png',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/movie-14.png',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.57,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
]

export default collectionGroups
