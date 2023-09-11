import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-storing';

  constructor(private cookie : CookieService){ }    //in this we have injected the cookieService.

  setCookie(){      // Here we have se the 2 cookies, to see the delete and delete all funtion.
    this.cookie.set("userId", "adminUser");
    this.cookie.set("userName", "Hriday Jadhav");
  }

  getCookie(){   //Here we have get the value on the console. ( Hriday Jadhav )
    console.log(this.cookie.get("userName")  );
    
  }

  deleteCookie(){    //from this we will delete perticular data / value
    console.log(this.cookie.delete("userName")  );
    
  }

  deleteAllCookie(){    // here we can delete all the cookies .
    this.cookie.deleteAll();
    
  }


}
