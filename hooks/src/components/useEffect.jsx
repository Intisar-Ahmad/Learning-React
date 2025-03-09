 // case 1: run on every render
  // useEffect(() => {
  //   alert('this is very bhino');
  
  //   return () => {
  //     console.log("this is a clean up function")//clean up function
  //   }
  // })
  //cleanup function
  useEffect(() => {
    alert('this is very count');
  
    return () => {
      console.log("this is a clean up function")//clean up function
    }
  },[count])

  //case 2: run on the first render
  // useEffect(() => {
  //   alert('this is very bhino');
  
  //   return () => {
  //     console.log("this is a clean up function")
  //   }
  // },[])

  //case 3:run on a specific state/prop
    // useEffect(() => {
  //   alert('this is very bhino');
  
  //   return () => {
  //     console.log("this is a clean up function")
  //   }
  // },[count])