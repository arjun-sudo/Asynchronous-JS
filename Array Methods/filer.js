//Filter array method
const items = [{ name: 'Macbook Pro', price: 200000 },
{ name: 'Macbook Air', price: 130000 },
{name :'ASUs' ,price :50000},
{name : 'Dell',price :'10000'} 
]
const filteredItems = items.filter((item) => {
    return item.price >= 150000
})
console.log(items)
// console.log(filteredItems);