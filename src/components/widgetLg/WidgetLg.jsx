import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) =>{
        return <button className = {"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className = "widgetLg">
           <h3 className="widgetLgTitle">Latest Transactions</h3>   
           <table className="widgetLgTable">
               <tr className="widgetLgTr">
                   <th className="widgetLgTh">Customer</th>
                   <th className="widgetLgTh">Date</th>
                   <th className="widgetLgTh">Amount</th>
                   <th className="widgetLgTh">Status</th>

               </tr>
               <tr calssName ="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Jyot</span>
                   </td>
                   <td className="widgetLgDate">2Jjun 2021</td>
                   <td className="widgetLgAmount">$444</td>
                   <td className="widgetLgStatus"><Button type ="Approved"/> </td>
               </tr>
               <tr calssName ="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Jyot</span>
                   </td>
                   <td className="widgetLgDate">2Jjun 2021</td>
                   <td className="widgetLgAmount">$444</td>
                   <td className="widgetLgStatus"><Button type ="Declined"/> </td>
               </tr>
               <tr calssName ="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Jyot</span>
                   </td>
                   <td className="widgetLgDate">2Jjun 2021</td>
                   <td className="widgetLgAmount">$444</td>
                   <td className="widgetLgStatus"><Button type ="Pending"/> </td>
               </tr>
               <tr calssName ="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                       <span className="widgetLgName">Jyot</span>
                   </td>
                   <td className="widgetLgDate">2Jjun 2021</td>
                   <td className="widgetLgAmount">$444</td>
                   <td className="widgetLgStatus"><Button type ="Approved"/> </td>
               </tr>

            </table>        
        </div> 
    )
}
