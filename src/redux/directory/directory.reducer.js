const INITIAL_STATE = {
	sections: [
  {
    title: "Nike",
    imageUrl: "https://i.ibb.co/86zBVMv/pexels-gustavo-gimenez-8979071.jpg",
    id: 1,
    linkUrl: "shop/nike",
  },
  {
    title: "Adidas",
    imageUrl: "https://i.ibb.co/zQhTwd8/pexels-the-happiest-face-1225136.jpg",
    id: 2,
    linkUrl: "shop/adidas",
  },
  {
    title: "Puma",
    imageUrl: "https://i.ibb.co/cFmDVQZ/pexels-suraj-b-2759785.jpg",
    id: 3,
    linkUrl: "shop/puma",
  },
  {
    title: "Womens",
    imageUrl: "https://i.ibb.co/LR7RbBw/pexels-wendy-wei-2820810.jpg",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "Mens",
    imageUrl: "https://i.ibb.co/8rXP7kM/pexels-allan-franca-carmo-3133688.jpg",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
]
}

const directoryReducer = (state = INITIAL_STATE , action) => {
	switch(action.type){
		default:
		return state;
	}
}

export default directoryReducer;