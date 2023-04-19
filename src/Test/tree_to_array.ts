const list = [
  { id: 1, pid: 0, name: '四川' },
  { id: 2, pid: 1, name: '成都' },
  { id: 3, pid: 1, name: '宜宾' },
  { id: 4, pid: 1, name: '绵阳' },
  { id: 5, pid: 1, name: '德阳' },
  { id: 6, pid: 2, name: '高新区' },
  { id: 7, pid: 2, name: '武侯区' },
  { id: 8, pid: 3, name: '翠屏区' }
];


const arrayToTree = (arr:any, pid:number) => {
  return arr.reduce((res:any, current:any) => {
    if (current[pid] === pid) {
      current.children = arrayToTree(arr, current['id']);
      return res.concat(current);
    }
    return res;
  }, []);
};


const resultes: any = arrayToTree(list, 0)

console.log(resultes)






