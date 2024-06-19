const catmodel = require("../schema/category.schema");

class CatService {
    
   async createCat (cateInfo) {
        const newCat = await catmodel.create(cateInfo)
   }        

   async findAllCats () {

   }

   async findOneCat (id) {

   }

   async updateOneCat (id, catInfo) {

   }

   async deleteOneCat (id) {

   }
}