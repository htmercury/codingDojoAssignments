using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using TheDojoLeague.Models;

namespace TheDojoLeague.Factories
{
    public class NinjaFactory
    {
        private string connectionString;
        public NinjaFactory()
        {
            connectionString = "server=localhost;userid=root;password=root;port=3306;database=dojosdb;SslMode=None";
        }
        internal IDbConnection Connection
        {
            get {
                return new MySqlConnection(connectionString);
            }
        }
        public void Add(NinjaModel item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query =  "INSERT INTO ninjas (name, level, description, dojo_id) VALUES (@Name, @Level, @Description, @Dojo_id)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<NinjaModel> NinjasWithDojos()
        {
            using (IDbConnection dbConnection = Connection)
            {
                var query = $"SELECT * FROM ninjas JOIN dojos ON ninjas.dojo_id = dojos.id";
                dbConnection.Open();
        
                IEnumerable<NinjaModel> myNinjas = dbConnection.Query<NinjaModel, DojoModel, NinjaModel>(query, (ninja, dojo) => { ninja.Dojo = dojo; return ninja; });
                return myNinjas;
            }
        }
        public IEnumerable<NinjaModel> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<NinjaModel>("SELECT * FROM ninjas");
            }
        }
        public NinjaModel FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<NinjaModel>("SELECT * FROM ninjas WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }

        public NinjaModel BanishByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<NinjaModel>("UPDATE ninjas SET dojo_id = 1 WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }

        public NinjaModel RecruitByID(int id, int dojo_id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<NinjaModel>("UPDATE ninjas SET dojo_id = @Dojo_id WHERE id = @Id", new { Id = id, Dojo_id = dojo_id }).FirstOrDefault();
            }
        }
    }
}