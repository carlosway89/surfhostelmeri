<!-- <div class="col-md-4 "> -->
	<div class="column productbox">
		<img src="http://placehold.it/460x250/e67e22/32645D&text={{this.title}}" class="img-responsive number-room-{{this.room}}">
	    <div class="producttitle">{{this.title}}</div>
	    <small>{{this.description}}</small>
	    <div class="productprice">
	    	<div class="pull-right">
	    		<a href="http://www.{{this.language}}hostelworld.com/hosteldetails.php/Surf-Hostel-Meri-former-Hostal-Lily/Trujillo/45167?propNum=45167&dateFrom={{this.get_date_from}}&dateTo={{this.get_date_to}}" class="btn btn-info btn-sm" role="button" target="_blank">Check</a>
	    	</div>
	    	<div class="pricetext">S/. <label> {{this.price}}</label>
	    		<small>
	    			{{#if this.private }}
	    				x room
	    			{{else}}
	    				x person
	    			{{/if}}
	    		</small>
	    	</div>
	    </div>
	</div>	    
<!-- </div> -->