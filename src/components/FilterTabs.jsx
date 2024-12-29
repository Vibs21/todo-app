function FilterTabs({ filter, setFilter }) {
  return (
    <div className="flex justify-between mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-lg font-medium ${
          filter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded-lg font-medium ${
          filter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={`px-4 py-2 rounded-lg font-medium ${
          filter === 'pending'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Pending
      </button>
    </div>
  );
}

export default FilterTabs;
