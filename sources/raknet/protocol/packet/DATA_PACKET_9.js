'use strict';

/* global minejs */
module.exports = {
    onLoad: ()=>{
        minejs.raknet.protocol.packet.DATA_PACKET_9 =
        
        class DATA_PACKET_9 extends minejs.raknet.protocol.DataPacket{
            static get ID() { return 0x89; }
            getID(){ return this.ID; }
        }
    }
}