export default function CardContainer({ titulo, children }) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {children}
        </div>
      </div>
    );
  }