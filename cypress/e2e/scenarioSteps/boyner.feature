Feature: Ebebek
	Scenario: Ebebek
		Given Ebebek sitesine git
        When arama kutusuna "kot pantalon" yaz
		Then sonuca tikla
		And arama sonucunda iki binden fazla sonuc oldugunu doğrula