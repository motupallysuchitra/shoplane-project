import { heart } from "../reducer/CardReducer";
import { useSelector } from "react-redux";
import Allitem from "../productcard/productcardlist/allitem";
import "./favitem.css"
function Favitem()
{

    let Favitems=useSelector(heart)
    return(
        <div>
            {Favitems.length===0 ?
              <div className="empty">
                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-paper-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5v6ZM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173V3.133Zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133v3.753Zm-3.693 3.324L16 6.873v6.5l-5.693-3.163Zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM5.693 10.21 0 13.372v-6.5l5.693 3.338ZM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982Z"/>
</svg>    
            Your favorite list is empty

                </div>
                :
                <div className="row">
            {
              Favitems.map((p,i)=>
              (
                <div key={i} className="col-md-3">
                <Allitem item={p} key={i} />
                  </div>

              ))
            }
         </div>
            }
        </div>
    );
}

export default Favitem;