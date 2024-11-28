

const Spinner = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>

      {/* <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 border-opacity-80"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="h-12 w-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>

      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
      </div> */}
    </>
  );
}

export default Spinner