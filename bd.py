import pymysql
f = open("csvv.csv", "r")

for line in f:
    a=line.split(';')
    con = pymysql.connect('localhost', 'wordpressu', 'BorisSerenkov41&', 'Wordpress')
    with con:
        cur=con.cursor()
        sql="""INSERT INTO test3(Name,Connection_string,Db_ip,Db_name,Server_ip) VALUES(%s,%s,%s,%s,%s)"""
        cur.execute(sql,(a[1],a[2],a[3],a[4],a[5]))
        con.commit()
        con.rollback()
    cur.close()
    con.close()