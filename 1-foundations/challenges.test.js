const Challenges = require ("./challenges")

describe ("1 Foundations", () => {
   test("escapeChallenge", () => {
      const s = Challenges.escapeChallenge();
      expect(s.charAt(0)).toBe("\\");
      expect(s.charAt(1)).toBe('"');
      expect(s.charAt(2)).toBe("'");
      expect(s.charAt(3)).toBe('`');
      expect(s.charAt(4)).toBe('`');
      expect(s.charAt(5)).toBe("'");
      expect(s.charAt(6)).toBe('"');
      expect(s.charAt(7)).toBe("\\");
      expect(s.length).toBe(8);
   });

   test("addLineNumbers", () => {
      expect(Challenges.addLineNumbers("Hello\nWorld\n!")).toBe("1 Hello\n2 World\n3 !");
      expect(Challenges.addLineNumbers("")).toBe("1 ");
      expect(Challenges.addLineNumbers("A")).toBe("1 A");
      expect(Challenges.addLineNumbers(".\n.\n.")).toBe("1 .\n2 .\n3 .");
   })

   test("jstypeof", () => {
      expect(Challenges.jstypeof("")).toBe("string");
      expect(Challenges.jstypeof(null)).toBe("null");
      expect(Challenges.jstypeof(() => {})).toBe("object");
      expect(Challenges.jstypeof((x) => {})).toBe("object");
      expect(Challenges.jstypeof({})).toBe("object");
      expect(Challenges.jstypeof(0)).toBe("number");
      expect(Challenges.jstypeof(true)).toBe("boolean");
      expect(Challenges.jstypeof(undefined)).toBe("undefined");
   });

   test("randomNumber", () => {
      for (let i = 0; i < 100; i++) {
         const min = -4.123;
         const max = 24.68;
         const r = Challenges.randomNumber(min, max);
         if (typeof r != "number" || r < min || r >= max) {
            expect(typeof r).toBe("number");
            expect(r).toBeGreaterThanOrEqual(min);
            expect(r).toBeLessThan(max);
         }
      }
   })

   test("randomInt", () => {
      for (let i = 0; i < 100; i++) {
         const min = -4;
         const max = 24;
         const r = Challenges.randomInt(min, max);
         if (typeof r != "number" || Math.floor(r) != r || r < min || r >= max) {
            expect(typeof r).toBe("number");
            expect(Math.floor(r)).toBe(r);
            expect(r).toBeGreaterThanOrEqual(min);
            expect(r).toBeLessThan(max);
         }
      }
   })

   test("add", () => {
      expect (Challenges.add(1, 2)).toBe(3);
      expect (Challenges.add("1", 2)).toBe(3);
      expect (Challenges.add(1, "2")).toBe(3);
      expect (() => {Challenges.add(null, 0)}).toThrow();
   });

   test("fizzBuzz", () => {
      const consoleLog = console.log;
      let logOutput = ""
      console.log = (msg) => {
         logOutput += `${msg}`;
      }
      Challenges.fizzBuzz();
      const expectedOutput = '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz'
      expect(logOutput).toBe(expectedOutput)

      console.log = consoleLog;
   });

   test("greeting", () => {
      expect(Challenges.greeting("Anne", "English")).toBe("Hello Anne!");
      expect(Challenges.greeting("Bob", "French")).toBe("Salut Bob!");
      expect(Challenges.greeting("Carolin", "German")).toBe("Hallo Carolin!");
      expect(() => {
         Challenges.greeting("", "").toThrow();
      })
   });

   test("randomLowerCase", () => {
      const s = Challenges.randomLowerCaseString(10);
      expect(s.length).toBe(10);
      expect(s.split().every(c => /[a-z]/.test(c)));
   });

   test("isVarBinding", () => {
      expect(Challenges.isVarBinding("var x = 10;"));
      expect(!Challenges.isVarBinding("let x = 10;"));
   })

   test("fileExtension", () => {
      expect(Challenges.fileExtension("Readme.md")).toBe("md");
      expect(Challenges.fileExtension("Readme.test")).toBe("test");
      expect(Challenges.fileExtension("Readme")).toBe("");
   });
});