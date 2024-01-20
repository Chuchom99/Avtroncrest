import React, {useState, useEffect} from 'react'

const InvestorTransaction = ({item}) => {
    const [alltransactions, setAllTransactions ] = useState([])


    useEffect(() => {
      setAllTransactions.get("admin/alltransactions/:userId").then((res) => {
        setAllTransactions(res.data)
      } 
      )
    }, []);
    console.log(alltransactions);

  return (
    <div>
        <div>
            <span></span>
        </div>

         {
            alltransactions.map((item, i) => (
        <div>
        <span>{item.type}</span>
        <span>{item.amount}</span>
        <span>{item.method_details}</span>
        <span>{item.trans_status}</span>
        <span>{item.wallet}</span>
        </div>
                ))
         }   
    </div>
  )
}

export default InvestorTransaction