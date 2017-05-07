Select products.id, products.system, products.name, products.description, images.id AS images_id, images.img, images.description, products_info.id AS info_id, products_info.header, products_info.description
From products
Inner Join images On images.products_id = products.id
Inner Join products_info On products_info.products_id = products.id
Where products.id = $1
