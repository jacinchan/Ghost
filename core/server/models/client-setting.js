var ghostBookshelf = require('./base'),
    ClientSetting,
    ClientSettings;

ClientSetting = ghostBookshelf.Model.extend({
    tableName: 'client_settings',

    app: function app() {
        return this.belongsTo('Client');
    }
});

ClientSettings = ghostBookshelf.Collection.extend({
    model: ClientSetting
});

module.exports = {
    ClientSetting: ghostBookshelf.model('ClientSetting', ClientSetting),
    ClientSettings: ghostBookshelf.collection('ClientSettings', ClientSettings)
};
