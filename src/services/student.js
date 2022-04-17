export const getAllStudents = async () => {
  return await fetch('https://open.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249')
    .then(res => res.json())
    .then(res => res.data);
}