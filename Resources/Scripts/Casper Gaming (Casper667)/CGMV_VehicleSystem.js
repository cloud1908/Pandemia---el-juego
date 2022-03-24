/*:
 * @plugindesc CGMV Vehicle System
 * @author Casper Gaming
 * @help
 * ==============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ==============================================================================
 * Become a Patron to get access to a demo for this plugin as well as beta plugins
 * https://www.patreon.com/CasperGamingRPGM
 * ==============================================================================
 * Version: 1.1
 * ------------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMV plugins.
 * Made for RPG Maker MV 1.6.1
 * ------------------------------------------------------------------------------
 * Description: This plugin modifies vehicle behavior to include a few different
 * things. It allows you to have interior maps for each vehicle, allowing the
 * player to walk around inside the airship for example. It also allows for
 * encounters in vehicles.
 * ------------------------------------------------------------------------------
 * Documentation:
 * The key for entering vehicles is based on the JS keycode values.
 * You can get the keycode for keys here: http://keycode.info/
 * 
 * To exit the vehicle interiors, use the following Plugin Command in an event:
 * CGMV VehicleExit
 *
 * To enter the vehicle interiors you can use the following Plugin Command in an event:
 * CGMV VehicleEnter
 *
 * Version History:
 * 1.0 - Initial release
 *
 * 1.1:
 * - Added ability to enter vehicle interiors with an event command
 * 
 * @param General Options
 * @param Boat Options
 * @param Ship Options
 * @param Airship Options
 *
 * @param Interior Key
 * @parent General Options
 * @type number
 * @default 65
 * @desc Keyboard JS keycode for input key that will trigger entering the vehicle's interior.
 *
 * @param Interior Enable Switch
 * @parent General Options
 * @type switch
 * @default 1
 * @desc Switch which enables/disables ability to enter vehicle interiors.
 *
 * @param Boat Landing Regions
 * @type number[]
 * @min 1
 * @default []
 * @parent Boat Options
 * @desc Region IDs that allow the vehicle to dock. Leaving this empty means it can dock anywhere.
 *
 * @param Boat Interior Map
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Map to transport player to when visit interior button is pressed.
 *
 * @param Boat Interior X
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc X coordinate of interior map
 *
 * @param Boat Interior Y
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Y coordinate of interior map
 *
 * @param Boat Interior Direction
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc starting direction for interior map
 *
 * @param Boat Encounters
 * @type troop[]
 * @default []
 * @parent Boat Options
 * @desc Troop IDs that the vehicle can encounter. Leaving this empty means no encounters.
 *
 * @param Boat Encounter Steps
 * @type number
 * @min 1
 * @default 60
 * @parent Boat Options
 * @desc Average steps before encounter in this vehicle.
 *
 * @param Boat Battleback1
 * @type file
 * @dir img/battlebacks1
 * @default []
 * @parent Boat Options
 * @desc Battle back 1 to use for encounters in this vehicle.
 
 * @param Boat Battleback2
 * @type file
 * @dir img/battlebacks2
 * @default []
 * @parent Boat Options
 * @desc Battle back 2 to use for encounters in this vehicle.
 *
 * @param Boat Encounter Switch
 * @type switch
 * @parent Boat Options
 * @desc Switch that turns on/off encounters in this vehicle.
 *
 * @param Ship Landing Regions
 * @type number[]
 * @default []
 * @parent Ship Options
 * @desc Region IDs that allow the vehicle to dock. Leaving this empty means it can dock anywhere.
 *
 * @param Ship Interior Map
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Map to transport player to when visit interior button is pressed.
 *
 * @param Ship Interior X
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc X coordinate of interior map
 *
 * @param Ship Interior Y
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Y coordinate of interior map
 *
 * @param Ship Interior Direction
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc starting direction for interior map
 *
 * @param Ship Encounters
 * @type troop[]
 * @min 0
 * @default []
 * @parent Ship Options
 * @desc Troop IDs that the vehicle can encounter. Leaving this empty means no encounters.
 *
 * @param Ship Encounter Steps
 * @type number
 * @min 1
 * @default 60
 * @parent Ship Options
 * @desc Average steps before encounter in this vehicle.
 *
 * @param Ship Battleback1
 * @type file
 * @dir img/battlebacks1
 * @default []
 * @parent Ship Options
 * @desc Battle back 1 to use for encounters in this vehicle.
 
 * @param Ship Battleback2
 * @type file
 * @dir img/battlebacks2
 * @default []
 * @parent Ship Options
 * @desc Battle back 2 to use for encounters in this vehicle.
 *
 * @param Ship Encounter Switch
 * @type switch
 * @parent Ship Options
 * @desc Switch that turns on/off encounters in this vehicle.
 *
 * @param Airship Landing Regions
 * @type number[]
 * @min 1
 * @default []
 * @parent Airship Options
 * @desc Region IDs that allow the vehicle to land. Leaving this empty means it can land anywhere.
 *
 * @param Airship Interior Map
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Map to transport player to when visit interior button is pressed.
 *
 * @param Airship Interior X
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc X coordinate of interior map
 *
 * @param Airship Interior Y
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Y coordinate of interior map
 *
 * @param Airship Interior Direction
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc starting direction for interior map
 *
 * @param Airship Encounters
 * @type troop[]
 * @default []
 * @parent Airship Options
 * @desc Troop IDs that the vehicle can encounter. Leaving this empty means no encounters.
 *
 * @param Airship Encounter Steps
 * @type number
 * @min 1
 * @default 60
 * @parent Airship Options
 * @desc Average steps before encounter in this vehicle.
 *
 * @param Airship Battleback1
 * @type file
 * @dir img/battlebacks1
 * @default []
 * @parent Airship Options
 * @desc Battle back 1 to use for encounters in this vehicle.
 
 * @param Airship Battleback2
 * @type file
 * @dir img/battlebacks2
 * @default []
 * @parent Airship Options
 * @desc Battle back 2 to use for encounters in this vehicle.
 *
 * @param Airship Encounter Switch
 * @type switch
 * @parent Airship Options
 * @desc Switch that turns on/off encounters in this vehicle.
*/
var Imported = Imported || {};
Imported.CGMV_VehicleSystem = true;
var CGMV = CGMV || {};
CGMV.VehicleSystem = CGMV.VehicleSystem || {};
CGMV.VehicleSystem.version = 1.1;
CGMV.VehicleSystem.parameters = PluginManager.parameters('CGMV_VehicleSystem');
CGMV.VehicleSystem.BoatDockRegions = JSON.parse(CGMV.VehicleSystem.parameters["Boat Landing Regions"]);
CGMV.VehicleSystem.ShipDockRegions = JSON.parse(CGMV.VehicleSystem.parameters["Ship Landing Regions"]);
CGMV.VehicleSystem.AirshipDockRegions = JSON.parse(CGMV.VehicleSystem.parameters["Airship Landing Regions"]);
CGMV.VehicleSystem.BoatEncounters = JSON.parse(CGMV.VehicleSystem.parameters["Boat Encounters"]);
CGMV.VehicleSystem.ShipEncounters = JSON.parse(CGMV.VehicleSystem.parameters["Ship Encounters"]);
CGMV.VehicleSystem.AirshipEncounters = JSON.parse(CGMV.VehicleSystem.parameters["Airship Encounters"]);
CGMV.VehicleSystem.BoatInteriorMapId = Number(CGMV.VehicleSystem.parameters["Boat Interior Map"]);
CGMV.VehicleSystem.BoatInteriorMapX = Number(CGMV.VehicleSystem.parameters["Boat Interior X"]);
CGMV.VehicleSystem.BoatInteriorMapY = Number(CGMV.VehicleSystem.parameters["Boat Interior Y"]);
CGMV.VehicleSystem.BoatInteriorMapDir = Number(CGMV.VehicleSystem.parameters["Boat Interior Direction"]);
CGMV.VehicleSystem.ShipInteriorMapId = Number(CGMV.VehicleSystem.parameters["Ship Interior Map"]);
CGMV.VehicleSystem.ShipInteriorMapX = Number(CGMV.VehicleSystem.parameters["Ship Interior X"]);
CGMV.VehicleSystem.ShipInteriorMapY = Number(CGMV.VehicleSystem.parameters["Ship Interior Y"]);
CGMV.VehicleSystem.ShipInteriorMapDir = Number(CGMV.VehicleSystem.parameters["Ship Interior Direction"]);
CGMV.VehicleSystem.AirshipInteriorMapId = Number(CGMV.VehicleSystem.parameters["Airship Interior Map"]);
CGMV.VehicleSystem.AirshipInteriorMapX = Number(CGMV.VehicleSystem.parameters["Airship Interior X"]);
CGMV.VehicleSystem.AirshipInteriorMapY = Number(CGMV.VehicleSystem.parameters["Airship Interior Y"]);
CGMV.VehicleSystem.AirshipInteriorMapDir = Number(CGMV.VehicleSystem.parameters["Airship Interior Direction"]);
CGMV.VehicleSystem.InteriorButton = Number(CGMV.VehicleSystem.parameters["Interior Key"]);
CGMV.VehicleSystem.InteriorSwitch = Number(CGMV.VehicleSystem.parameters["Interior Enable Switch"]);
CGMV.VehicleSystem.BoatEncounterSteps = Number(CGMV.VehicleSystem.parameters["Boat Encounter Steps"]);
CGMV.VehicleSystem.ShipEncounterSteps = Number(CGMV.VehicleSystem.parameters["Ship Encounter Steps"]);
CGMV.VehicleSystem.AirshipEncounterSteps = Number(CGMV.VehicleSystem.parameters["Airship Encounter Steps"]);
CGMV.VehicleSystem.BoatEncounterSwitch = Number(CGMV.VehicleSystem.parameters["Boat Encounter Switch"]);
CGMV.VehicleSystem.ShipEncounterSwitch = Number(CGMV.VehicleSystem.parameters["Ship Encounter Switch"]);
CGMV.VehicleSystem.AirshipEncounterSwitch = Number(CGMV.VehicleSystem.parameters["Airship Encounter Switch"]);
CGMV.VehicleSystem.BoatBattleback1 = CGMV.VehicleSystem.parameters["Boat Battleback1"];
CGMV.VehicleSystem.BoatBattleback2 = CGMV.VehicleSystem.parameters["Boat Battleback2"];
CGMV.VehicleSystem.ShipBattleback1 = CGMV.VehicleSystem.parameters["Ship Battleback1"];
CGMV.VehicleSystem.ShipBattleback2 = CGMV.VehicleSystem.parameters["Ship Battleback2"];
CGMV.VehicleSystem.AirshipBattleback1 = CGMV.VehicleSystem.parameters["Airship Battleback1"];
CGMV.VehicleSystem.AirshipBattleback2 = CGMV.VehicleSystem.parameters["Airship Battleback2"];
//=============================================================================
// CGMV_Core
//-----------------------------------------------------------------------------
// New plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Handle plugin commands
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_pluginCommand = CGMV_Core.prototype.pluginCommand;
CGMV_Core.prototype.pluginCommand = function(command, args) {
	alias_CGMV_VehicleSystem_pluginCommand.call(this, command, args);
	if(command == "CGMV") {
		if(args[0] == "VehicleExit") {
			$gamePlayer.CGMV_vehicleInteriorExit();
		}
		else if(args[0] == "VehicleEnter") {
			$gamePlayer.CGMV_forceVehicleInteriorEnter();
		}
	}
};
//=============================================================================
// Game_Vehicle
//-----------------------------------------------------------------------------
// Modify the vehicle object for additional options
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also check for docking regions
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_isLandOk = Game_Vehicle.prototype.isLandOk;
Game_Vehicle.prototype.isLandOk = function(x, y, d) {
    if(!alias_CGMV_VehicleSystem_isLandOk.call(this, x, y, d)) return false;
	var currentRegionId = $gameMap.regionId(x, y);
	if(this.isBoat()) {
		if(CGMV.VehicleSystem.BoatDockRegions.length === 0) return true;
		for(var i = 0; i < CGMV.VehicleSystem.BoatDockRegions.length; i++) {
			if(currentRegionId === Number(CGMV.VehicleSystem.BoatDockRegions[i])) return true;
		}
	}
	else if (this.isShip()) {
		if(CGMV.VehicleSystem.ShipDockRegions.length === 0) return true;
		for(var i = 0; i < CGMV.VehicleSystem.ShipDockRegions.length; i++) {
			if(currentRegionId === Number(CGMV.VehicleSystem.ShipDockRegions[i])) return true;
		}
	}
	else if (this.isAirship()) {
		if(CGMV.VehicleSystem.AirshipDockRegions.length === 0) return true;
		for(var i = 0; i < CGMV.VehicleSystem.AirshipDockRegions.length; i++) {
			if(currentRegionId === Number(CGMV.VehicleSystem.AirshipDockRegions[i])) return true;
		}
	}
	return false;
};
//-----------------------------------------------------------------------------
// Alias. Do not save BGM if in interior
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_getOn = Game_Vehicle.prototype.getOn;
Game_Vehicle.prototype.getOn = function() {
	if($gamePlayer._isInInterior) {
		this._driving = true;
		this.setWalkAnime(true);
		this.setStepAnime(true);
		this.playBgm();
	}
	else {
		alias_CGMV_VehicleSystem_getOn.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Do not replay BGM if in interior
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_getOff = Game_Vehicle.prototype.getOff;
Game_Vehicle.prototype.getOff = function() {
	if($gamePlayer._isInInterior) {
		this._driving = false;
		this.setWalkAnime(false);
		this.setStepAnime(false);
		this.resetDirection();
	}
    else {
		alias_CGMV_VehicleSystem_getOff.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Do not land Airship if gonig to interior
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_updateAirshipAltitude = Game_Vehicle.prototype.updateAirshipAltitude;
Game_Vehicle.prototype.updateAirshipAltitude = function() {
    if(!$gamePlayer._isInInterior) alias_CGMV_VehicleSystem_updateAirshipAltitude.call(this);
};
//=============================================================================
// Game_Player
//-----------------------------------------------------------------------------
// Update to check if vehicle interior map should be called, encounters in vehicle
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Set some interior variables to defaultt values
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function() {
    alias_CGMV_VehicleSystem_initMembers.call(this);
	this._vehicleInteriorRecall = '';
	this._isInInterior = false;
	this._vehicleRecallX = 0;
	this._vehicleRecallY = 0;
	this._vehicleRecallD = 0;
	this._transferringToInterior = false;
};
//-----------------------------------------------------------------------------
// Alias. Check for vehicle interior input
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_updateVehicle = Game_Player.prototype.updateVehicle;
Game_Player.prototype.updateVehicle = function() {
	alias_CGMV_VehicleSystem_updateVehicle.call(this);
    if (this.isInVehicle() && !this.areFollowersGathering() && !this._vehicleGettingOn && !this._vehicleGettingOff) {
        this.CGMV_updateVehicleInterior(false);
    }
};
//-----------------------------------------------------------------------------
// Check for vehicle interior input, execute transfer if input detected
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMV_updateVehicleInterior = function(usingEventCommand) {
    if(($cgmvTemp.isKeyPressed(CGMV.VehicleSystem.InteriorButton) || usingEventCommand) && !this._transferringToInterior && $gameSwitches.value(CGMV.VehicleSystem.InteriorSwitch)) {
        this._transferringToInterior = true;
		this._vehicleRecallX = this.x;
		this._vehicleRecallY = this.y;
		this._vehicleRecallD = this.direction();
		this._vehicleRecallMap = $gameMap.mapId();
		if(this.isInBoat()) {
			this._vehicleInteriorRecall = 'boat';
			var mapId = CGMV.VehicleSystem.BoatInteriorMapId;
			var x = CGMV.VehicleSystem.BoatInteriorMapX;
			var y = CGMV.VehicleSystem.BoatInteriorMapY;
			var dir = CGMV.VehicleSystem.BoatInteriorMapDir;
		}
		else if(this.isInShip()) {
			this._vehicleInteriorRecall = 'ship';
			var mapId = CGMV.VehicleSystem.ShipInteriorMapId;
			var x = CGMV.VehicleSystem.ShipInteriorMapX;
			var y = CGMV.VehicleSystem.ShipInteriorMapY;
			var dir = CGMV.VehicleSystem.ShipInteriorMapDir;
		}
		else if(this.isInAirship()) {
			this._vehicleInteriorRecall = 'airship';
			var mapId = CGMV.VehicleSystem.AirshipInteriorMapId;
			var x = CGMV.VehicleSystem.AirshipInteriorMapX;
			var y = CGMV.VehicleSystem.AirshipInteriorMapY;
			var dir = CGMV.VehicleSystem.AirshipInteriorMapDir;
		}
		this._isInInterior = true;
		this._vehicleGettingOff = true;
		this.vehicle().getOff();
		this.setMoveSpeed(4);
        this.setThrough(false);
		this.reserveTransfer(mapId, x, y, dir, 0);
		this._transferringToInterior = false;
    }
};
//-----------------------------------------------------------------------------
// Force Enter Interior of Vehicle
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMV_forceVehicleInteriorEnter = function() {
	if(this.isInVehicle() && !this.areFollowersGathering() && !this._vehicleGettingOn && !this._vehicleGettingOff) {
		this.CGMV_updateVehicleInterior(true);
	}
};
//-----------------------------------------------------------------------------
// Exit Interior of Vehicle
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMV_vehicleInteriorExit = function() {
	if(this._isInInterior) {
		this.gatherFollowers();
		this._vehicleType = this._vehicleInteriorRecall;
		var x  = this._vehicleRecallX;
		var y  = this._vehicleRecallY;
		var dir = this._vehicleRecallD;
		var mapId = this._vehicleRecallMap;
		this._vehicleGettingOn = true;
		this.reserveTransfer(mapId, x, y, dir, 0);
	}
};
//-----------------------------------------------------------------------------
// Alias. Clear vehicle interior flag only after vehicle is boarded
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_updateVehicleGetOn = Game_Player.prototype.updateVehicleGetOn;
Game_Player.prototype.updateVehicleGetOn = function() {
	alias_CGMV_VehicleSystem_updateVehicleGetOn.call(this);
    if (!this.areFollowersGathering() && !this.isMoving()) {
        this._isInInterior = false;
    }
	this.makeEncounterCount();
};
//-----------------------------------------------------------------------------
// Alias. No need for checking altitude for airship interior
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_updateVehicleGetOff = Game_Player.prototype.updateVehicleGetOff;
Game_Player.prototype.updateVehicleGetOff = function() {
	if(this._isInInterior && this.vehicle().isAirship()) {
		this._vehicleGettingOff = false;
        this._vehicleType = 'walk';
        this.setTransparent(false);
	}
    else {
		alias_CGMV_VehicleSystem_updateVehicleGetOff.call(this);
	}
	this.makeEncounterCount();
};
//-----------------------------------------------------------------------------
// Alias. Make encounter count (avg steps differ based on vehicle)
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_makeEncounterCount = Game_Player.prototype.makeEncounterCount;
Game_Player.prototype.makeEncounterCount = function() {
    if(this.isInBoat()) {
		var n = CGMV.VehicleSystem.BoatEncounterSteps;
		this._encounterCount = Math.randomInt(n) + Math.randomInt(n) + 1;
	}
	else if(this.isInShip()) {
		var n = CGMV.VehicleSystem.ShipEncounterSteps;
		this._encounterCount = Math.randomInt(n) + Math.randomInt(n) + 1;
	}
	else if(this.isInAirship()) {
		var n = CGMV.VehicleSystem.AirshipEncounterSteps;
		this._encounterCount = Math.randomInt(n) + Math.randomInt(n) + 1;
	}
	else {
		alias_CGMV_VehicleSystem_makeEncounterCount.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Can encounter on all vehicles, if switch is on.
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_canEncounter = Game_Player.prototype.canEncounter;
Game_Player.prototype.canEncounter = function() {
	if(this._vehicleGettingOn || this._vehicleGettingOff) {
		return false;
	}
	if(!$gameParty.hasEncounterNone() && $gameSystem.isEncounterEnabled() && !this.isMoveRouteForcing() && !this.isDebugThrough()) {
		if(this.isInBoat() && (CGMV.VehicleSystem.BoatEncounterSwitch === 0 || $gameSwitches.value(CGMV.VehicleSystem.BoatEncounterSwitch))) {
			return true;
		}
		else if(this.isInShip() && (CGMV.VehicleSystem.ShipEncounterSwitch === 0 || $gameSwitches.value(CGMV.VehicleSystem.ShipEncounterSwitch))) {
			return true;
		}
		else if(this.isInAirship() && (CGMV.VehicleSystem.AirshipEncounterSwitch === 0 || $gameSwitches.value(CGMV.VehicleSystem.AirshipEncounterSwitch))) {
			return true;
		}
	}
	return alias_CGMV_VehicleSystem_canEncounter.call(this);
};
//-----------------------------------------------------------------------------
// Alias. Different encounter lists for vehicles
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_makeEncounterTroopId = Game_Player.prototype.makeEncounterTroopId;
Game_Player.prototype.makeEncounterTroopId = function() {
	if(this.isInBoat()) {
		var encounterId = Math.randomInt(CGMV.VehicleSystem.BoatEncounters.length - 1);
		return Number(CGMV.VehicleSystem.BoatEncounters[encounterId]);
	}
	else if(this.isInShip()) {
		var encounterId = Math.randomInt(CGMV.VehicleSystem.ShipEncounters.length - 1);
		return Number(CGMV.VehicleSystem.ShipEncounters[encounterId]);
	}
	else if(this.isInAirship()) {
		var encounterId = Math.randomInt(CGMV.VehicleSystem.AirshipEncounters.length - 1);
		return Number(CGMV.VehicleSystem.AirshipEncounters[encounterId]);
	}
	else {
		return alias_CGMV_VehicleSystem_makeEncounterTroopId.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Undo 1/2 encounter rate for ship
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_encounterProgressValue = Game_Player.prototype.encounterProgressValue;
Game_Player.prototype.encounterProgressValue = function() {
    var val = alias_CGMV_VehicleSystem_encounterProgressValue.call(this);
	if(this.isInShip()) val *= 2;
	return val;
};
//=============================================================================
// Spriteset_Battle
//-----------------------------------------------------------------------------
// Show battlebacks for vehicle encounters
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Change battleback for vehicles.
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_battleBack1Name = Spriteset_Battle.prototype.battleback1Name;
Spriteset_Battle.prototype.battleback1Name = function() {
    if($gamePlayer.isInBoat()) {
		return CGMV.VehicleSystem.BoatBattleback1;
	}
	else if($gamePlayer.isInShip()) {
		return CGMV.VehicleSystem.ShipBattleback1;
	}
	else if($gamePlayer.isInAirship()) {
		return CGMV.VehicleSystem.AirshipBattleback1;
	}
	else {
		return alias_CGMV_VehicleSystem_battleBack1Name.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Change battleback for vehicles.
//-----------------------------------------------------------------------------
var alias_CGMV_VehicleSystem_battleback2Name = Spriteset_Battle.prototype.battleback2Name;
Spriteset_Battle.prototype.battleback2Name = function() {
    if($gamePlayer.isInBoat()) {
		return CGMV.VehicleSystem.BoatBattleback2;
	}
	else if($gamePlayer.isInShip()) {
		return CGMV.VehicleSystem.ShipBattleback2;
	}
	else if($gamePlayer.isInAirship()) {
		return CGMV.VehicleSystem.AirshipBattleback2;
	}
	else {
		return alias_CGMV_VehicleSystem_battleback2Name.call(this);
	}
};