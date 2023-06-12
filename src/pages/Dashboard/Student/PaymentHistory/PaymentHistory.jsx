const PaymentHistory = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-white dark:text-gray-700 text-center py-5">
        Payment History
      </h2>
      <div className="bg-[#f7f7f7] dark:bg-white dark:shadow-md max-w-6xl mx-auto p-10 rounded-md">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#1D0E15] dark:bg-gray-700 rounded-xl text-white">
              <tr>
                <th></th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
