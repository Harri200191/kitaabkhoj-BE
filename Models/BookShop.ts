import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config/config';


interface BookShopAttributes {
    id: number
    location: string
    name: string
    shopkeeper_id: number
    catalog_id: number
   
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

export interface BookShopInput extends Optional<BookShopAttributes, 'id'> { }

export interface BookShopOuput extends Required<BookShopAttributes> { }

class BookShop extends Model<BookShopAttributes, BookShopInput> implements BookShopAttributes {

    public id!: number
    public location: string
    public name: string
    public shopkeeper_id: number 
    public catalog_id: number   

    // timestamps!
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt!: Date
}

BookShop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        shopkeeper_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        catalog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
       
    },
    {
        sequelize: sequelizeConnection,
        paranoid: true,
    },
)


export default BookShop;
