


class Contact
{
    constructor(contactName = "", emailAddress = "", contactNumber = "", contactMessage = "")
    {
        this.contactName = contactName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
    }
}

class User
{
    constructor(firstName = "", lastName = "", emailAddress = "", password = "", confirmPassword="")
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}


"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let contactObject = new Contact();
    let UserObject = new User();
    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
       PageSwitcher();

        Main();
    }

    function PageSwitcher()
    {
        let name = window.location.pathname;

       let pageName = name.substring(1, name.length - 5);

       switch(pageName)
        {
            case "index":
               DisplayHomePageContent();
                break;
            case "products":
                DisplayProductsContent();
                break;
            case "services":
                DisplayServicesContent();
                break;
            case "about":
                DisplayAboutContent();
                break;
            case "contact":
                DisplayContactContent();
                break;
            case "projects":
                DisplayProjectsContent();
                break;
            case "login":
                DisplayLoginContent();
                break;
            case "register":
                DisplayRegisterContent();
                break;
            default:
                console.error("Landed in a page that is not defined");
                break;
        }

        // add a class of active to the active link
        $("#"+pageName).addClass("active");
    }

    function DisplayHomePageContent()
    {
        document.getElementById("home").className = "nav-item active";
        /* $("button").click(()=>{
            location.href = "projects.html";
        }); */

        document.title = "INFT2202 - Home";

        let progressbar = $( "#progressBar" ).progressbar({
            value: 37
          });

        console.log(progressbar);

        $("#projectsButton").click(function(){
            $(this).fadeOut(3000, "linear", ()=>{
                $(this).fadeIn(1000, "linear", ()=>{
                    location.href = "projects.html";
                });
            });
        });
    }
    $("errorMessage").hide();
    $("contactName").select();

    function DisplayProductsContent()
    {
        document.title = "INFT2202 - Products";
    }

    function DisplayServicesContent()
    {
        document.title = "INFT2202 - Services";
    }

    function DisplayAboutContent()
    {
        document.title = "INFT2202 - About Us";
    }

    function DisplayContactContent()
    {
        document.title = "INFT2202 - Contact Us";
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#contactForm")[0].reset();
            $("#errorMessage").hide();
        }

        function validateInput(selector, condition, errorMessage)
        {
            if(condition)
            {
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else
            {
                $("#errorMessage").hide();
                $(selector).css("border", "1px solid #ced4da");
            }
        }

        $("#errorMessage").hide();
        $("#contactName").select();

        // Contact Name Events
        $("#contactName").blur((e)=>
        {
            validateInput("#contactName",( $("#contactName").val().length < 2),"Contact Name is Too Short");
        });

        $("#contactName").focus((e)=>
        {
            $("#contactName").select();
        });

        // Email Events
        $("#emailAddress").blur((e)=>
        {
            validateInput("#emailAddress",($("#emailAddress").val().length < 8) || (!$("#emailAddress").val().includes("@")),"Invalid Email Address");
        });

        $("#emailAddress").focus((e)=>
        {
            $("#emailAddress").select();
        });

        // Contact Number Events
        $("#contactNumber").blur((e)=>
        {
            let phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
            let phoneNumber = $("#contactNumber").val();

            validateInput("#contactNumber",( !phonePattern.test(phoneNumber)),"Invalid Contact Number");
        });

        $("#contactNumber").focus((e)=>
        {
            $("#contactNumber").select();
        });

        // Contact Message Events
        $("#contactMessage").blur((e)=>
        {
            validateInput("#contactMessage",( $("#contactMessage").val().length < 2 ),"Contact Message Too Short");
        });

        $("#contactMessage").focus((e)=>
        {
            $("#contactMessage").select();
        });


        $("#contactForm").submit  ((e)=>
        {
            if(document.getElementById("contactForm").checkValidity() == false)
            {
                e.preventDefault();
                e.stopPropagation();
                console.log("form not valid");
            }

            
            let contactName = $("#contactName").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#contactMessage").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });
        

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
    }

    function DisplayProjectsContent()
    {
        document.title = "INFT2202 - Projects";
    }

    function DisplayLoginContent()
    {
        document.title = "INFT2202 - Login";

        $("#loginForm").submit  ((e)=>
        {
           
            e.preventDefault();
            e.stopPropagation();
            $("#loginForm")[0].reset();
            $("#login").hide();
            $("#logout").show();

        });

    }

    function DisplayRegisterContent()
    {
        document.title = "INFT2202 - Register";
        function validateInput(selector, condition, errorMessage)
        {
            if(condition)
            {
                $("errorMessage").show();
                $("errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else{
                $("errorMessage").hide();
                $(selector).css("border", "2px solid #ced4da");
            }
        }
        $("#submitButton").click((e)=>
    {
        if(document.getElementById("registerForm").checkValidity() == false)
        {
            e.preventDefault();
            e.stopPropagation();
            console.log("form not valid");
        }

        e.preventDefault();
        let FirstName = $("#FirstName").val();
        let lastName = $("#lastName").val();
        let emailAddress = $("#emailAddress").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();

        console.log(`First Name: ${FirstName}`);
        console.log(`last Name: ${lastName}`);
        console.log(`email Address: ${emailAddress}`);
        console.log(`Password: ${password}`);
        console.log(`Confirm Password: ${confirmPassword}`);

        UserObject.FirstName = FirstName;
        UserObject.lastName = lastName;
        UserObject.emailAddress = emailAddress;
        UserObject.password = password;
        UserObject.confirmPassword = confirmPassword;

        console.log(UserObject);3

        
    });
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

