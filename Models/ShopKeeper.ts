import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from './../config/config';

interface ShopKeeperAttributes {
    id: number;
    name: string; 
    age: number; 
    email: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface ShopKeeperInput extends Optional<ShopKeeperAttributes, 'id'> { }

export interface ShopKeeperOuput extends Required<ShopKeeperAttributes> { }

class ShopKeeper extends Model<ShopKeeperAttributes, ShopKeeperInput> implements ShopKeeperAttributes {

    public id!: number;
    public name: string;
    public age: number;
    public email: string;
  

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

ShopKeeper.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement :true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }, 
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
   
}, {
    sequelize: sequelizeConnection,
    paranoid: true,
})


export default ShopKeeper    