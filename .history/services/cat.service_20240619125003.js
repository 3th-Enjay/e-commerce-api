const catmodel = require("../schema/category.schema");

class CatService {
    
   async createCat (cateInfo) {
        const newCat = new catmodel(cateInfo);
        const savedCat = await newCat.save();
        return savedCat;
   }        

   async findAllCats () {
        const allCats = await catmodel.find();
        return allCats
   }

   async findOneCat (id) {

   }

   async updateOneCat (id, catInfo) {

   }

   async deleteOneCat (id) {

   }
}