import React from 'react';
import { Link } from 'react-router-dom';

const SectionWithPreview = ({ title, items, limit = 3, viewMoreLink, viewMoreText = 'View More' }) => {
  const displayedItems = limit ? items.slice(0, limit) : items;
  const showViewMore = limit && items.length > limit;

  return (
    <div>
      {title && (
        <div className="text-center mb-12 md:mb-16">
          <span className="text-green-600 font-semibold tracking-wider text-sm uppercase">
            {title}
          </span>
        </div>
      )}
      {items.length > 0 ? (
        <>
          {displayedItems.map((item, index) => (
            <div key={item.id || index} style={{ animationDelay: `${index * 0.1}s` }}>
              {item}
            </div>
          ))}
          {showViewMore && (
            <div className="mt-8 text-center">
              <Link
                to={viewMoreLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
              >
                {viewMoreText}
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500">No items found</p>
      )}
    </div>
  );
};

export default SectionWithPreview;