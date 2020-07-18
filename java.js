
       function validate() {
        var x = document.forms["myform"]["name"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }

        var y = document.forms["myform"]["email"].value;
        if (y == "") {
            alert("email must be filled out");
            return false;
        }

        var z = document.forms["myform"]["number"].value;
        if (z== "") {
          alert("phonenumber must be filled out");
          return false;
        }
      }
