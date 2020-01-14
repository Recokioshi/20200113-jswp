const myVegetables = ['Pomidor', 'Ziemniaki'];
const myFruits = ['Banany', 'Truskawki', 'Jabłka'];

export const productService = {
    getVegetables: function() {
       return myVegetables;
    },
    getFruits() {
        return myFruits;
    }
};
