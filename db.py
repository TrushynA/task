import pymysql
f = open("newconf1.csv", "r")

for line in f:
    a=line.split(',')
    con = pymysql.connect('localhost', 'wordpressu', 'BorisSerenkov41&', 'Wordpress')
    with con:
        cur=con.cursor()
        sql="""INSERT INTO test33(Db_ip,Connection_string,Port_cs,Port_db,Name_lat) VALUES(%s,%s,%s,%s,%s)"""
        cur.execute(sql,(a[10],a[9],a[12],a[13],a[5]))
        con.commit()
        con.rollback()
    cur.close()
    con.close()