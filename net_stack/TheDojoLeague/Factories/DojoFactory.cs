using System;
using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using TheDojoLeague.Models;

namespace TheDojoLeague.Factories
{
    public class DojoFactory
    {
        private string connectionString;
        public DojoFactory()
        {
            connectionString = "server=localhost;userid=root;password=root;port=3306;database=dojosdb;SslMode=None";
        }
        internal IDbConnection Connection
        {
            get {
                return new MySqlConnection(connectionString);
            }
        }
        public void Add(DojoModel item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query =  "INSERT INTO dojos (name, location, description) VALUES (@Name, @Location, @Description)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<DojoModel> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<DojoModel>("SELECT * FROM dojos");
            }
        }
        public DojoModel FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                var query =
                @"
                SELECT * FROM dojos WHERE id = @Id;
                SELECT * FROM ninjas WHERE dojo_id = @Id;
                ";
                using (var multi = dbConnection.QueryMultiple(query, new {Id = id}))
                {
                    DojoModel dojo;
                    try
                    {
                        dojo = multi.Read<DojoModel>().Single();
                    }
                    catch (InvalidOperationException e)
                    {   
                        dbConnection.Close();
                        try 
                        {
                            dojo = dbConnection.Query<DojoModel>("SELECT * FROM dojos WHERE name = 'Rogue'").FirstOrDefault();
                        }                    
                        catch 
                        {
                            Add(new DojoModel() {Name = "Rogue", Location = "None"});
                            dojo = dbConnection.Query<DojoModel>("SELECT * FROM dojos WHERE name = 'Rogue'").FirstOrDefault();
                        }
                    }
                    dojo.Ninjas = multi.Read<NinjaModel>().ToList();
                    return dojo;
                }
            }
        }

        public DojoModel FindRogue()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                DojoModel dojo;
                try 
                {
                    dojo = dbConnection.Query<DojoModel>("SELECT * FROM dojos WHERE name = 'Rogue'").FirstOrDefault();
                }                    
                catch 
                {
                    Add(new DojoModel() {Name = "Rogue", Location = "None"});
                    dojo = dbConnection.Query<DojoModel>("SELECT * FROM dojos WHERE name = 'Rogue'").FirstOrDefault();
                }
                var multi = dbConnection.QueryMultiple("SELECT * FROM ninjas WHERE dojo_id = @Id;", new {Id = dojo.Id});
                dojo.Ninjas = multi.Read<NinjaModel>().ToList();
                return dojo;
            }
        }
    }
}