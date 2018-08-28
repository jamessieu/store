CREATE TABLE "User" (
	"id" serial NOT NULL,
	"username" varchar NOT NULL,
	CONSTRAINT User_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Cart" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT Cart_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Item" (
	"id" serial NOT NULL,
	"quantity" integer NOT NULL,
	"title" varchar NOT NULL,
	"genre" varchar NOT NULL,
	"color" varchar NOT NULL,
	"imagePath" varchar NOT NULL,
	"price" varchar NOT NULL,
	"cartId" integer NOT NULL,
	CONSTRAINT Item_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Cart" ADD CONSTRAINT "Cart_fk0" FOREIGN KEY ("userId") REFERENCES "User"("id");

ALTER TABLE "Item" ADD CONSTRAINT "Item_fk0" FOREIGN KEY ("cartId") REFERENCES "Cart"("id");
