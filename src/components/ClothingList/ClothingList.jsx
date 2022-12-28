import './ClothingList.css';
import ClothingListItem from '../ClothingItemList/ClothingItemList';

export default function ClothingList({ clothingItems, handleAddToOrder }) {
  const items = clothingItems.map(item =>
    <ClothingListItem
      key={item._id}
      clothingItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="ClothingList">
      {items}
    </main>
  );
}