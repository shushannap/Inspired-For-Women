import './ClothingItemList.css';

export default function ClothingItemList({ clothingItem, handleAddToOrder }) {
  return (
    <div className="ClothingListItem">
      <div className="emoji flex-ctr-ctr">{clothingItem.emoji}</div>
      <div className="name">{clothingItem.name}</div>
      <div className="buy">
        <span>${clothingItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(clothingItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}