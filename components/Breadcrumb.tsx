interface BreadcrumbItem {
  title: string;
  link: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="bg-white py-4 px-6 md:px-10 flex items-center flex-wrap mt-20">
      <ul className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <a href={item.link} className={index === items.length - 1 ? 'text-slate-400 text-sm' : 'text-red-500 text-sm'}>
              {item.title}
            </a>
            {index !== items.length - 1 && (
              <svg
                className="w-5 h-auto fill-current mx-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
