export interface View {
  fid: number,
  title: string,
  content: string,
  fetchedDate: any,
  author: string
}

export const articleData : View[] = [
  {
    fid: 1,
    title: 'Streamlining your design process today.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto iste necessitatibus nobis quae unde. Consequatur ea eum ipsum iure perspiciatis voluptates. Aliquid at dolores est exercitationem fugiat mollitia quidem.',
    fetchedDate: new Date(),
    author: 'Jashwanth Thatipamula',
  },
  {
    fid: 2,
    title: 'Aperiam, architecto iste necessitatibus nobis quae.',
    content:
      'Streamlining your design process today Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto iste necessitatibus nobis quae unde. Consequatur ea eum ipsum iure perspiciatis voluptates. Aliquid at dolores est exercitationem fugiat mollitia quidem.',
    fetchedDate: new Date().setDate(new Date().getDay() + 3),
    author: 'John Smith',
  },
  {
    fid: 3,
    title: 'Streamlining your design process today.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto iste necessitatibus nobis quae unde. Consequatur ea eum ipsum iure perspiciatis voluptates. Aliquid at dolores est exercitationem fugiat mollitia quidem.',
    fetchedDate: new Date(),
    author: 'Jashwanth Thatipamula',
  },
  {
    fid: 4,
    title: 'Aperiam, architecto iste necessitatibus nobis quae.',
    content:
      'Streamlining your design process today Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto iste necessitatibus nobis quae unde. Consequatur ea eum ipsum iure perspiciatis voluptates. Aliquid at dolores est exercitationem fugiat mollitia quidem.',
    fetchedDate: new Date().setDate(new Date().getDay() + 3),
    author: 'John Smith',
  },
  {
    fid: 5,
    title: 'Streamlining your design process today.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto iste necessitatibus nobis quae unde. Consequatur ea eum ipsum iure perspiciatis voluptates. Aliquid at dolores est exercitationem fugiat mollitia quidem.',
    fetchedDate: new Date(),
    author: 'Jashwanth Thatipamula',
  },
  {
    fid: 6,
    title: 'Aperiam, architecto iste necessitatibus nobis quae.',
    content:
      'Streamlining your design process today Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto iste necessitatibus nobis quae unde. Consequatur ea eum ipsum iure perspiciatis voluptates. Aliquid at dolores est exercitationem fugiat mollitia quidem.',
    fetchedDate: new Date().setDate(new Date().getDay() + 3),
    author: 'John Smith',
  },
]