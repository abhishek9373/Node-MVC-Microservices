// import { DataTypes, Sequelize } from "sequelize";
// import { getDbConnection } from "../database";
// import { PartiesFields } from "./Interface";

// export function getPartiesModel() {
//     const getParties = getDbConnection().define<PartiesFields>(
//         "parties",
//         {
//             party_id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 allowNull: false,
//                 autoIncrement: true,
//             },
//             created_by: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false,
//             },
//             name: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//             mobile_number: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//             type: {
//                 type: DataTypes.ENUM("regular", "business"),
//                 allowNull: false,
//                 defaultValue: "regular",
//             },
//             gst_no: {
//                 type: DataTypes.STRING,
//                 allowNull: true,
//             },
//             address_id: {
//                 type: DataTypes.INTEGER,
//                 allowNull: true,
//             },
//             status: {
//                 type: DataTypes.ENUM("1", "0"),
//                 defaultValue: "1",
//             },
//             created_at: {
//                 type: "TIMESTAMP",
//                 allowNull: false,
//                 defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//             },
//             updated_at: {
//                 type: "TIMESTAMP",
//                 allowNull: false,
//                 defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//             },
//         },
//         {
//             freezeTableName: true,
//             underscored: true,
//         }
//     );
//     getParties.sync();
//     return getParties;
// }