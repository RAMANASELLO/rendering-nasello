import data from './mock-data'
import {useState, useEffect} from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const {categoryId}=useParams()
    const [items, setItems] = useState ([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    });

    useEffect(() => {
        getData.then((result) => {
            if(categoryId){
                const newProducts= result.filter(item=> item.categoria === categoryId);
                setItems (newProducts) 
            }   else{
                setItems(result)
            }

           
        })
    }, [categoryId]);    
            
        
  return (
  
  <>
    <ItemList itemsList={items} />
  </>
    
  )
}

export default ItemListContainer