class Password {
    constructor() {
      console.log("Welcome to Password Generator");
    }
    generateWeakPassword() {
      let chars = "abcdefghijklmnopqrstuvwxyz";
      let numbers = "1234567890";
      let specialChars = "!@#$%^&*()_+-=";
      let all = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=";
      let password = "";
      password += chars.charAt(Math.floor(Math.random() * chars.length));
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      password += all.charAt(Math.floor(Math.random() * all.length));
      return password;
    }
    generateFunnyPassword() {
      let pass_arr = ["admin", "password", "incorrect", "wrong", "hacker", "parrot", "hint", "lion"];
      let password = "";
      password += pass_arr[Math.floor(Math.random() * pass_arr.length)];
      return password;
    }
    generateStrongPassword() {
      let chars = "abcdefghijklmnopqrstuvwxyz";
      let numbers = "1234567890";
      let specialChars = "!@#$%^&*()_+-=";
      let all = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=";
      let password = "";
      password += chars.charAt(Math.floor(Math.random() * chars.length));
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      for (let i = 3; i < 8; i++) {
        password += all.charAt(Math.floor(Math.random() * all.length));
      }
      return password;
    }
    generateSuperStrongPassword() {
      let chars = "abcdefghijklmnopqrstuvwxyz";
      let numbers = "1234567890";
      let specialChars = "!@#$%^&*()_+-=";
      let all = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=";
      let password = "";
      password += chars.charAt(Math.floor(Math.random() * chars.length));
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      for (let i = 3; i < 16; i++) {
        password += all.charAt(Math.floor(Math.random() * all.length));
      }
      return password;
  
    }
  }
  
  let password1 = new Password();
  
  
  buttonWP = document.getElementById("button1");
  buttonWP.addEventListener("click", function() {
    let password = password1.generateWeakPassword();
    document.getElementById("password-box").innerText = password;
  });
  
  buttonFP = document.getElementById("button2");
  buttonFP.addEventListener("click", function() {
    let password = password1.generateFunnyPassword();
    document.getElementById("password-box").innerText = password;
  });
  
  buttonSP = document.getElementById("button3");
  buttonSP.addEventListener("click", function() {
    let password = password1.generateStrongPassword();
    document.getElementById("password-box").innerText = password;
  });
  
  buttonSSP = document.getElementById("button4");
  buttonSSP.addEventListener("click", function() {
    let password = password1.generateSuperStrongPassword();
    document.getElementById("password-box").innerText = password;
  });
  
  
  
  
  
  