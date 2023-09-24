const EmployeesTable = () => {
  return (
    <>
      <div className="grid w-screen grid-cols-6 gap-4 mb-5">
        <div className="text-2xl font-bold">Name</div>
        <div className="text-2xl font-bold">Email</div>
        <div className="text-2xl font-bold">Mobile</div>
        <div className="text-2xl font-bold">Department</div>
        <div className="text-2xl font-bold">Role</div>
      </div>
    </>
  );
};

export default EmployeesTable;
