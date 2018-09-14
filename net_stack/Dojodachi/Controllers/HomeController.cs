using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Dojodachi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Dojodachi.Controllers {
    public static class SessionExtensions {
        // We can call ".SetObjectAsJson" just like our other session set methods, by passing a key and a value
        public static void SetObjectAsJson (this ISession session, string key, object value) {
            // This helper function simply serializes theobject to JSON and stores it as a string in session
            session.SetString (key, JsonConvert.SerializeObject (value));
        }

        // generic type T is a stand-in indicating that we need to specify the type on retrieval
        public static T GetObjectFromJson<T> (this ISession session, string key) {
            string value = session.GetString (key);
            // Upon retrieval the object is deserialized based on the type we specified
            return value == null ? default (T) : JsonConvert.DeserializeObject<T> (value);
        }
    }
    public class HomeController : Controller {
        [HttpGet]
        [Route ("")]
        public IActionResult Index () {
            HttpContext.Session.Clear();
            PetModel Pet = new PetModel () {
            Fullness = 20,
            Happiness = 20,
            Meals = 3,
            Energy = 50
            };
            HttpContext.Session.SetObjectAsJson ("Dojodachi", Pet);
            ViewBag.Win = false;
            return View (Pet);
        }

        [HttpGet]
        [Route ("feed")]
        public object[] Feed () {
            PetModel Pet = HttpContext.Session.GetObjectFromJson<PetModel> ("Dojodachi");
            string msg = Pet.Feed ();
            HttpContext.Session.SetObjectAsJson ("Dojodachi", Pet);
            return new object[] { msg, Pet.Fullness, Pet.Meals };
        }

        [HttpGet]
        [Route ("play")]
        public object[] Play () {
            PetModel Pet = HttpContext.Session.GetObjectFromJson<PetModel> ("Dojodachi");
            string msg = Pet.Play ();
            HttpContext.Session.SetObjectAsJson ("Dojodachi", Pet);
            return new object[] { msg, Pet.Happiness, Pet.Energy };
        }

        [HttpGet]
        [Route ("work")]
        public object[] Work () {
            PetModel Pet = HttpContext.Session.GetObjectFromJson<PetModel> ("Dojodachi");
            string msg = Pet.Work ();
            HttpContext.Session.SetObjectAsJson ("Dojodachi", Pet);
            return new object[] { msg, Pet.Meals, Pet.Energy };
        }

        [HttpGet]
        [Route ("sleep")]
        public object[] Sleep () {
            PetModel Pet = HttpContext.Session.GetObjectFromJson<PetModel> ("Dojodachi");
            string msg = Pet.Sleep ();
            HttpContext.Session.SetObjectAsJson ("Dojodachi", Pet);
            return new object[] { msg, Pet.Energy, Pet.Happiness, Pet.Fullness };
        }

        [HttpGet]
        [Route ("win")]
        public bool Win () {
            PetModel Pet = HttpContext.Session.GetObjectFromJson<PetModel> ("Dojodachi");
            return Pet.Win ();
        }

        [HttpGet]
        [Route ("dead")]
        public bool Dead () {
            PetModel Pet = HttpContext.Session.GetObjectFromJson<PetModel> ("Dojodachi");
            return Pet.Dead ();
        }
    }
}