
export default function ActionList() {
  const handleClick = (e:any) => {
    // e.target is the actual clicked DOM element
    if (e.target.matches('.delete-btn')) {
      console.log('Delete clicked');
    } else if (e.target.matches('.edit-btn')) {
      console.log('Edit clicked');
    }
  };

  return (
    <div onClick={handleClick} className="action-list">
      <button className="edit-btn">Edit</button>
      <button className="delete-btn">Delete</button>
      <button className="edit-btn">Edit Again</button>
    </div>
  );
}

//Performance → You avoid attaching many listeners (e.g., for lists with hundreds of elements)
// Dynamic content → No need to rebind handlers when new items are added (e.g., from API)
// Cleaner code → One centralized handler}
