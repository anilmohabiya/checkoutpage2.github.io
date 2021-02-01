import React from 'react';
import foot from './images/web2.jpg';
import {  Link } from 'react-router-dom/cjs/react-router-dom.min';
const Checkoutp2 =()=>{
    return(
        <>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-10 col-10 mx-auto">
                   <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
               
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">Brand</Link>
                            
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">My following</Link>
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
               
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
             </nav>
             </div>
             </div>
             <div className="card shadow"> 
               
                       <h5 className=" p-1 gx-3  mt-5 px-5">CHEKOUT</h5>
                       <p className="  p-5 ">Go Back</p>
                       
                      <div className="row">
                      <div className=" col-md-6 col-12 col-lg-6 col-md-6 col-sm-6 mx-auto p-5">
                        <p className=" font-weight-bold">Order Products</p>
                      <div class="post-container">                
                     <div class="post-thumb"><img src={foot}  alt={foot} /></div>  
                    <div class="post-title mt-2">Black massage <br/> Electronic<span className="p-5 mt-2">BDH 75</span></div>
                   
                      </div>

                      <div class="post-container">                
                     <div class="post-thumb"><img src={foot}  alt={foot} /></div>  
                    <div class="post-title mt-2">Rastky watch

                     <br/>Electronic<span className="p-5 mt-2">BDH 75</span></div>
                   
                      </div>


                      <div class="post-container">                
                     <div class="post-thumb"><img src={foot} alt={foot}  /></div>
                     
                    <div class="post-title mt-2">Pedicure Kit <br/>Electronic<span className="p-5 mt-2">BDH 75</span></div>
                      </div>
                                        
 
                         
<Link to="#" class="btn btn-success btn-md btn-block mt-5" role="button" aria-pressed="true">Place Order</Link>
                       </div>
                       
                       <div className=" col-md-6 col-12 col-lg-6  col-sm-12 mx-auto p-5 mt-4">
                       <div class="post-container">                
                     <div class="post-right"><img src={foot} alt={foot}  /></div>
                     
                    <div class="post-name mt-2">john deo <br/> +912546879</div>
                      </div>
                      <div class="form-group col-12">
                          <hr/>
                         </div>
                    
                          <Link to="#">Payment <br/></Link>
                          
                   
                          <Link to="#">
                          <i class="fas fa-angle-up mt-2">My Market wallet</i></Link>
                       
                         
<Link to="#" class="btn btn-success btn-md btn-block mt-3" role="button" aria-pressed="true">Place Order</Link>

                      </div>
                   </div>

                   {/* 2nd raw start */}
                   <div className="row">
                      <div className=" col-md-6 col-12 col-lg-6 col-md-6 col-sm-6 mx-auto p-5">
                               <p className=" font-weight-bold">Address 
                             <span class="title-right text-decoration-underline">
                             <Link to="">+ Edit</Link></span></p>


                             
                             <span class="title-right text-success"> Remove</span>  
                          <p>malad(w) libertygarden<br/>
                           room.11 adrashroad<br/>
                           mumbai-400064 india</p>
                           <p>(+14562-45464</p>
                           
                            <span class=" text-decoration-underline">
                             <Link to="">+ Add a New Address</Link></span>
                             <div class="form-group col-12">
                          <hr/>
                         </div>
                         
                          <h5>Total  <span class="title-right"> $511.00</span></h5>
                          
                          <p>Coupon-applied  <span class="title-right">My market</span></p>
                          
                          <p>Coupon-discount <span class="title-right"> -$90</span></p>
                          
                          <p>Grant Total  <span class="title-right"> $421.00</span></p>
                         
                          <p className=" font-weight-bold">NOTE</p>
                        

                       </div>
                       
                       <div className=" col-md-12 col-12 col-lg-6  col-sm-12 mx-auto p-5 ">
                     
  <Link to="#" class="btn btn-success btn-md btn-block w-50 mt-lg-5">Place Order</Link>
  
                      </div>
                   </div>



               </div>
               </div>
           
             
             
             
            
          
         
        </>
    )
}
export default Checkoutp2;